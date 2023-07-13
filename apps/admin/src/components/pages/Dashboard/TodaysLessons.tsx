import { clients, prisma } from "@bpvs/db";
import { Card, Title } from "@mantine/core";
import { useEffect, useState } from "react";

export const TodaysLessons = () => {
  const [clients, setClients] = useState<clients[]>([]);

  useEffect(() => {
    const getClients = async () => {
      const clients = await prisma.clients.findMany();
      setClients(clients);
    };
    getClients();
  }, []);

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Title order={3}>Today&apos;s Lessons</Title>

      <ul>
        {clients.map((client) => (
          <li key={client.id}>{client.name}</li>
        ))}
      </ul>
    </Card>
  );
};
