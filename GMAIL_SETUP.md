# Gmail Setup for Contact Form

This guide will help you configure Gmail to send emails from your contact form.

## Step 1: Enable 2-Step Verification

1. Go to your Google Account: https://myaccount.google.com/
2. Navigate to **Security** → **2-Step Verification**
3. Follow the prompts to enable 2-Step Verification

## Step 2: Generate an App Password

### On Desktop/Web Browser:
1. Go to: https://myaccount.google.com/apppasswords
   - Or navigate: **Security** → **2-Step Verification** → **App passwords**
2. Select **Mail** as the app
3. Select **Other (Custom name)** as the device
4. Enter a name like "Next.js Contact Form"
5. Click **Generate**
6. Copy the 16-character password (it will look like: `abcd efgh ijkl mnop`)
   - **Important:** When you paste it into `.env.local`, remove all spaces!
   - Example: `abcd efgh ijkl mnop` becomes `abcdefghijklmnop`

### On Mobile (iPhone/Android):
**Option 1: Using Mobile Browser**
1. Open your mobile browser (Safari, Chrome, etc.)
2. Go to: https://myaccount.google.com/apppasswords
3. Sign in if prompted
4. Select **Mail** as the app
5. Select **Other (Custom name)** as the device
6. Enter a name like "Next.js Contact Form"
7. Tap **Generate**
8. Copy the 16-character password
   - **Important:** Remove all spaces when pasting into `.env.local`
   - Example: `abcd efgh ijkl mnop` → `abcdefghijklmnop`

**Option 2: Using Google Account App**
1. Open the **Google** app or **Google Account** app on your phone
2. Tap your profile picture/icon (top right)
3. Tap **Manage your Google Account**
4. Tap **Security** tab (at the top)
5. Scroll down and tap **2-Step Verification**
6. Scroll down and tap **App passwords**
7. Select **Mail** as the app
8. Select **Other (Custom name)** as the device
9. Enter a name like "Next.js Contact Form"
10. Tap **Generate**
11. Copy the 16-character password
    - **Important:** Remove all spaces when pasting into `.env.local`
    - Example: `abcd efgh ijkl mnop` → `abcdefghijklmnop`

**Tip:** If you don't see "App passwords" option, make sure 2-Step Verification is enabled first (Step 1).

## Step 3: Configure Environment Variables

Create a `.env.local` file in your project root with the following:

```env
# Your Gmail address
SMTP_USER=your-email@gmail.com

# The 16-character App Password (NO SPACES!)
# Gmail shows it as: abcd efgh ijkl mnop
# But use it as:      abcdefghijklmnop
SMTP_PASSWORD=abcdefghijklmnop

# Optional: Customize these if needed
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_FROM=your-email@gmail.com
CONTACT_EMAIL=your-email@gmail.com
```

**Important Notes:**
- Use your full Gmail address for `SMTP_USER`
- Use the App Password (not your regular Gmail password) for `SMTP_PASSWORD`
- **CRITICAL:** Remove ALL spaces from the App Password! 
  - Gmail displays: `abcd efgh ijkl mnop`
  - Use in config: `abcdefghijklmnop` (no spaces!)
- The `CONTACT_EMAIL` is where form submissions will be sent

## Step 4: Restart Your Development Server

After creating `.env.local`, restart your Next.js development server:

```bash
npm run dev
```

## Testing

Submit a test form on your contact page. If configured correctly, you should receive an email with the form details.

## Troubleshooting

**Error: "Invalid login"**
- Make sure you're using an App Password, not your regular password
- Verify 2-Step Verification is enabled
- Check that there are no extra spaces in the App Password

**Error: "Connection timeout"**
- Check your internet connection
- Verify firewall isn't blocking port 587
- Try using port 465 with `secure: true` (requires code change)

**Emails not received**
- Check spam/junk folder
- Verify `CONTACT_EMAIL` is correct
- Check server logs for detailed error messages
