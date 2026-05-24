# Welcome to Your New Website!

This guide will explain exactly how you can open, run, and take full ownership of your new website. No developer jargon—just simple steps!

## 1. What is in this Project Folder

This folder contains all the files that make up your website. It uses a modern framework called Next.js. Here are the most important parts:
- **`src/` folder:** This is where the actual content and look of your website live. It contains the layout, pages, and components (like buttons, contact forms, and navigation).
- **`public/` folder:** This is where your images, icons, and logos are stored.
- **`package.json` file:** Think of this as the recipe book for your website. It tells the computer what tools are needed to run your site.
- **Configuration files:** Files like `tailwind.config.ts` and `next.config.mjs` help style your website and manage how it builds behind the scenes.

## 2. Prerequisites & Downloads

Before you can run the website on your computer, you will need to download and install a few things:
- **A Web Browser:** Like Google Chrome or Safari, to view the website.
- **Node.js:** This is the engine that runs your website on your computer. You can download it for free from [nodejs.org](https://nodejs.org/). (Download the "LTS" version).
- **A Code Editor:** To make changes to your website (like updating your contact email or API keys). We recommend downloading [Visual Studio Code](https://code.visualstudio.com/) for free.

## 3. How to Run the Website Locally

Once you have installed Node.js, follow these steps to see the website on your computer:

1. **Open the Project:** Open your code editor (like Visual Studio Code) and open this exact folder (`devang-portfolio`).
2. **Open the Terminal:** In Visual Studio Code, go to the top menu, click on **Terminal**, and then select **New Terminal**.
3. **Install Dependencies:** In the terminal window that appears at the bottom, type the following command and press Enter:
   ```bash
   npm install
   ```
   *(This will download all the necessary tools required to build the website. It might take a minute or two.)*
4. **Start the Website:** Once the installation is finished, type the following command and press Enter:
   ```bash
   npm run dev
   ```
5. **View Your Site:** Open your web browser (like Google Chrome) and go to this address: **`http://localhost:3000`**. You should now see your website running!

## 4. API & Credentials Configuration

Your website uses a contact form that sends emails directly to you. To make sure these emails go to *your* inbox, you need to add your own API key.

Here is how to do it:
1. **Get your API Key:** Go to [Web3Forms](https://web3forms.com/) and sign up for free to get an Access Key.
2. **Find the Configuration File:** In your code editor, open the `src/components/Contact.tsx` file.
3. **Insert Your Key:** Look for the line near the top (around line 15) that looks like this:
   ```typescript
   const WEB3FORMS_ACCESS_KEY = "YOUR_API_KEY_HERE"; 
   ```
   Replace the placeholder key with the actual key you got from Web3Forms. Make sure to keep the quote marks around your key!
4. *(Optional)* **Update Your Links:** In the same `Contact.tsx` file (around lines 9 and 10), you can also update the `WHATSAPP_LINK` and `EMAIL_LINK` variables to use your own phone number and email address.

## 5. How to Move It to Production

When you are ready to share your website with the world, you can host it for free using a service like **Vercel** or **Netlify**. Since this website is built with Next.js, Vercel is the best and easiest choice.

Here is a quick 2-step overview of how to go live:
1. **Create an Account:** Go to [Vercel](https://vercel.com/) and create a free account.
2. **Upload Your Project:** Once logged in, click "Add New..." and select "Project". You can upload this entire project folder by dragging and dropping it, or connecting to your GitHub account if you have one. Vercel will automatically configure everything and give you a live URL (like `your-website.vercel.app`)!
