import prisma from "@/lib/prisma";

// Forcer le rendu dynamique
// export const dynamic = "force-dynamic";
export const revalidate = 15;

export default async function Home() {
  const users = await prisma.user.findMany();
  return (
    <main>
      <h1>Hello World</h1>
      <ul data-testid="users-list">
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </main>
  );
}
