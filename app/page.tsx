
import BBSCardList from "@/components/BBSCardList";
import { prisma } from "@/lib/prisma";

export default function Home() {
  // Server Action
  async function createUser(formData: FormData) {
    "use server";

    const name = formData.get("name");
    const email = formData.get("email");

    try {
      // ユーザー作成処理
      await prisma.user.create({
        data: {
          name: name as string,
          email: email as string,
        },
      });

      console.log("ユーザー作成に成功しました");
    } catch (error) {
      console.error("ユーザー作成に失敗しました, " + error);
    }
  }

  return (
    <div>
      <BBSCardList />
    </div>
  );
}

