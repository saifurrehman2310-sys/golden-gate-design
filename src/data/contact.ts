/**
 * PLACEHOLDER CONTACT DETAILS: NOT VERIFIED BUSINESS CONTACTS.
 *
 * These values are placeholders and must be replaced with the real WhatsApp number and a mailbox
 * Saif Studio actually reads BEFORE the site accepts real customer enquiries. The contact form's
 * mailto recipient uses `email`. Set `verified` to true only once both are confirmed real.
 */
export const contact = {
  email: "hello@saifstudio.com",
  /** Digits only, with country code, as used in https://wa.me/<number> */
  whatsappNumber: "919999999999",
  verified: false,
} as const;

export const whatsappUrl = `https://wa.me/${contact.whatsappNumber}`;
export const mailtoUrl = `mailto:${contact.email}`;
