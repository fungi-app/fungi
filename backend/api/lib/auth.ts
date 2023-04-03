import crypto from "node:crypto";
import { prisma } from "@fungi/db";

type DeviceMeta = {
  type: "website" | "mobile_app";
  ip: string;
};

export abstract class Auth {
  static generateSalt() {
    return crypto.randomBytes(64).toString("base64");
  }
  static hashPassword(password: string, salt: string) {
    return crypto
      .createHash("sha512")
      .update(password)
      .update(Buffer.from(salt, "base64"))
      .digest()
      .toString("base64");
  }
  static generateSessionToken() {
    return crypto.randomBytes(128).toString("base64");
  }

  static async authenticateUser(
    email: string,
    password: string,
    device: DeviceMeta
  ) {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return null;
    if (user.passwordHash !== this.hashPassword(password, user.passwordSalt))
      return null;

    const sessionToken = this.generateSessionToken();
    await prisma.session.create({
      data: {
        firstIp: device.ip,
        token: sessionToken,
        from: device.type === "mobile_app" ? "APP" : "WEBSITE",
        userCuid: user.cuid,
      },
    });

    return {
      sessionToken,
      user,
    };
  }
  static async authorizeUser(token: string) {
    const session = await prisma.session.findUnique({
      where: { token },
      include: { user: true },
    });
    if (!session) return null;
    return session;
  }
}
