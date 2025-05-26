"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setPending(true);
    setSuccess(false);

    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      // Simular envío de formulario
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Formulario enviado:", data);

      setMessage("¡Gracias por tu mensaje! Te responderé pronto.");
      setSuccess(true);
      e.target.reset();
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setMessage("Algo salió mal. Por favor, intenta de nuevo.");
      setSuccess(false);
    } finally {
      setPending(false);
    }
  }

  return (
    <Card className="p-8 shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre *</Label>
            <Input id="name" name="name" placeholder="Tu nombre completo" required className="h-12" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input id="email" name="email" type="email" placeholder="tu@email.com" required className="h-12" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject">Asunto</Label>
          <Input id="subject" name="subject" placeholder="¿De qué quieres hablar?" className="h-12" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Mensaje *</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Cuéntame sobre tu proyecto o idea..."
            required
            className="min-h-[120px] resize-none"
          />
        </div>
        <Button type="submit" className="w-full h-12 text-lg" disabled={pending}>
          {pending ? (
            "Enviando..."
          ) : (
            <>
              <Send className="h-5 w-5 mr-2" />
              Enviar mensaje
            </>
          )}
        </Button>
        {message && (
          <div
            className={`flex items-center gap-2 p-4 rounded-lg ${success ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"}`}
          >
            {success && <CheckCircle className="h-5 w-5" />}
            <p className="text-sm font-medium">{message}</p>
          </div>
        )}
      </form>
    </Card>
  );
}
