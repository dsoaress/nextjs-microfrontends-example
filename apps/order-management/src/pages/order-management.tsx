import { Card, CardDescription, CardHeader, CardTitle } from "@nextjs-microfrontends-example/ui";

export default function OrderManagementPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Gerenciamento de Pedidos</CardTitle>
        <CardDescription>Essa é uma aplicação rodando no mesmo container do Root</CardDescription>
      </CardHeader>
    </Card>
  );
}
