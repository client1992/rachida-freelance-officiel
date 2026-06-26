import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, company, email, phone, city } = body

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: "Nom et email sont requis" },
        { status: 400 }
      )
    }

    // Log the contact request (in production, send email via Resend, SendGrid, etc.)
    console.log("Nouvelle demande de contact:", {
      name,
      company,
      email,
      phone,
      city,
      timestamp: new Date().toISOString(),
    })

    // Here you would integrate with an email service like Resend:
    // await resend.emails.send({
    //   from: "noreply@rachidabigourn.fr",
    //   to: "Bigourn.rachida@gmail.com",
    //   subject: `Nouvelle demande de devis de ${name}`,
    //   html: `...`
    // })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: "Erreur lors de l'envoi" },
      { status: 500 }
    )
  }
}
