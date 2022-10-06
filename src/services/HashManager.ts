import * as bcryptjs from "bcryptjs";

export class HashManager {
  public async hash(text: string): Promise<string> {
    const cost = Number(process.env.BCRYPTJS_COST);
    const salt = await bcryptjs.genSalt(cost);
    return bcryptjs.hash(text, salt);
  }
  public async compare(text: string, hash: string): Promise<boolean> {
    return bcryptjs.compare(text, hash);
  }
}