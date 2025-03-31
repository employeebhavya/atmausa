import nodemailer from "nodemailer";

export async function POST(request) {
  const { email, firstName, lastName, password, membershipType } =
    await request.json();

  // Create Zoho Mail transporter
  const transporter = nodemailer.createTransport({
    host: process.env.ZOHO_MAIL_HOST,
    port: parseInt(process.env.ZOHO_MAIL_PORT),
    secure: process.env.ZOHO_MAIL_SECURE === "true",
    auth: {
      user: process.env.ZOHO_MAIL_USER,
      pass: process.env.ZOHO_MAIL_PASSWORD,
    },
  });

  // Determine membership type label
  const membershipLabels = {
    lifetime: "Lifetime Membership ($150)",
    medicalStudent: "Medical Student Membership ($75)",
    alliedHealth: "Allied Health Science Membership ($100)",
  };

  // Email content
  const mailOptions = {
    from: `AATMA Membership <${process.env.ZOHO_MAIL_USER}>`,
    to: email,
    subject: "Your AATMA Membership Registration",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #1a365d;">Welcome to AATMA, ${firstName} ${lastName}!</h1>
        
        <div style="background-color: #f7fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #2d3748;">Membership Details</h2>
          <p><strong>Membership Type:</strong> ${
            membershipLabels[membershipType]
          }</p>
          <p><strong>Registration Date:</strong> ${new Date().toLocaleDateString()}</p>
        </div>
        
        <div style="background-color: #ebf8ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #2b6cb0;">Your Account Credentials</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Password:</strong> ${password}</p>
          <p style="font-size: 0.9em; color: #718096;">
            For security reasons, we recommend changing your password after first login.
          </p>
        </div>
        
        <div style="margin: 20px 0;">
          <a href="${process.env.NEXT_PUBLIC_SITE_URL}/login" 
             style="display: inline-block; background-color: #4299e1; color: white; 
                    padding: 10px 20px; text-decoration: none; border-radius: 4px;
                    font-weight: bold;">
            Login to Your Account
          </a>
        </div>
        
        <div style="border-top: 1px solid #e2e8f0; padding-top: 20px; font-size: 0.9em; color: #718096;">
          <p>If you have any questions, please contact us at <a href="mailto:support@aatma.org" style="color: #3182ce;">support@aatma.org</a></p>
          <p>© ${new Date().getFullYear()} American Tamil Medical Association. All rights reserved.</p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error sending email via Zoho:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message,
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
