export const CHATBOT_TREE = {
  welcome: {
    text: "Hello! Welcome to ATX Technologies (Advanced Technology Xcellence). I am your automated virtual assistant. How can I assist you today?",
    options: [
      { label: "Explore Our 4 Core Services", next: "services_overview" },
      { label: "Request a Project Quote / Consultation", next: "consultation" },
      { label: "AI & Automation Solutions", next: "ai_details" },
      { label: "Software & Web Development", next: "web_details" },
      { label: "Technology Training Programs", next: "training_details" },
      { label: "Chat Directly on WhatsApp", next: "whatsapp_action" }
    ]
  },
  services_overview: {
    text: "ATX Technologies delivers practical digital innovation across 4 key pillars:\n\n1. AI & Automation (Chatbots & workflow pipelines)\n2. Software & Web Development (Bespoke websites & apps)\n3. Digital Transformation & IT Consulting (Strategic modernizing)\n4. Technology Training (Practical AI, coding & tech skills)\n\nWhich area would you like to explore?",
    options: [
      { label: "1. AI & Automation", next: "ai_details" },
      { label: "2. Software & Web Development", next: "web_details" },
      { label: "3. IT Consulting", next: "consulting_details" },
      { label: "4. Technology Training", next: "training_details" },
      { label: "Return to Main Menu", next: "welcome" }
    ]
  },
  ai_details: {
    text: "Our AI & Automation solutions help eliminate repetitive tasks, improve client response times with smart assistants, and integrate intelligent workflows into your business operations.\n\nWould you like to discuss an AI solution for your business?",
    options: [
      { label: "Connect with us on WhatsApp", next: "whatsapp_action" },
      { label: "Send an Email Inquiry", next: "email_action" },
      { label: "View Other Services", next: "services_overview" }
    ]
  },
  web_details: {
    text: "We engineer modern, ultra-fast web applications, corporate websites, and custom software systems designed to convert visitors and scale seamlessly.\n\nReady to build or revamp your digital presence?",
    options: [
      { label: "Discuss Your Project on WhatsApp", next: "whatsapp_action" },
      { label: "Fill Out the Inquiry Form", next: "form_action" },
      { label: "View Other Services", next: "services_overview" }
    ]
  },
  consulting_details: {
    text: "Our IT Consulting helps organizations assess current infrastructure, cut redundant software costs, and adopt modern digital tools with minimal disruption.",
    options: [
      { label: "Book a Consultation via WhatsApp", next: "whatsapp_action" },
      { label: "Send an Inquiry", next: "form_action" },
      { label: "Main Menu", next: "welcome" }
    ]
  },
  training_details: {
    text: "We provide hands-on, practical education in artificial intelligence, software coding, and modern digital productivity skills for individuals and corporate teams.",
    options: [
      { label: "Inquire About Upcoming Batches", next: "whatsapp_action" },
      { label: "Join the Waitlist / Email Us", next: "email_action" },
      { label: "Main Menu", next: "welcome" }
    ]
  },
  consultation: {
    text: "We would love to learn more about your project. You can either chat with our team directly on WhatsApp for an immediate response or leave an inquiry through our contact form.",
    options: [
      { label: "Chat Immediately on WhatsApp", next: "whatsapp_action" },
      { label: "Fill the Contact Form", next: "form_action" },
      { label: "Back to Menu", next: "welcome" }
    ]
  },
  whatsapp_action: {
    text: "Click below to connect directly with an ATX Technologies specialist on WhatsApp (0815 088 2291). We will be glad to assist you!",
    action: {
      type: "link",
      url: "https://wa.me/2348150882291?text=Hello%20ATX%20Technologies,%20I%20am%20inquiring%20via%20the%20website%20assistant.",
      buttonText: "Open WhatsApp Chat"
    },
    options: [
      { label: "Back to Main Menu", next: "welcome" }
    ]
  },
  email_action: {
    text: "You can write to our official email at atxtechnologies2026@gmail.com or scroll down to use the quick contact form on this page.",
    options: [
      { label: "Go to Contact Form", next: "form_action" },
      { label: "Back to Main Menu", next: "welcome" }
    ]
  },
  form_action: {
    text: "You can fill out the enquiry form at the bottom of the page with your project requirements, and our team will get back to you promptly.",
    action: {
      type: "scroll",
      targetId: "contact",
      buttonText: "Jump to Contact Form"
    },
    options: [
      { label: "Back to Main Menu", next: "welcome" }
    ]
  }
};
