import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, rating, message } = body

    // Validate required fields
    if (!name || !rating || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont requis" },
        { status: 400 }
      )
    }

    // Log the testimonial (in production, send email via Resend, SendGrid, etc.)
    console.log("Nouvel avis recu:", {
      name,
      rating,
      message,
      timestamp: new Date().toISOString(),
    })

    // Here you would integrate with an email service like Resend:
    // await resend.emails.send({
    //   from: "noreply@rachidabigourn.fr",
    //   to: "bigourn.rachida@gmail.com",
    //   subject: `Nouvel avis de ${name} (${rating}/5 etoiles)`,
    //   html: `
    //     <h2>Nouvel avis client</h2>
    //     <p><strong>Nom:</strong> ${name}</p>
    //     <p><strong>Note:</strong> ${rating}/5</p>
    //     <p><strong>Avis:</strong> ${message}</p>
    //   `
    // })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: "Erreur lors de l'envoi" },
      { status: 500 }
    )
  }
}
