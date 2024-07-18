import { Card, CardDescription, CardHeader, CardTitle } from "@nextjs-microfrontends-example/ui";

export default function Home() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Planejamento de Rotas</CardTitle>
        <CardDescription>Essa é uma aplicação externa ao Root</CardDescription>
      </CardHeader>
    </Card>
  );
}
