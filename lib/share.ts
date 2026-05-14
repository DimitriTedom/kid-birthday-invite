export const buildWhatsappShareUrl = (message: string, phone?: string) => {
  const encoded = encodeURIComponent(message);
  if (phone) {
    return `https://wa.me/${phone}?text=${encoded}`;
  }
  return `https://wa.me/?text=${encoded}`;
};

export const buildRsvpWhatsappUrl = (phone: string, message: string) => {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encoded}`;
};

export const copyToClipboard = async (text: string) => {
  if (typeof navigator === "undefined" || !navigator.clipboard) {
    return false;
  }

  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
};

export const shareWithWebApi = async (payload: {
  title: string;
  text: string;
  url: string;
}) => {
  if (typeof navigator === "undefined" || !navigator.share) {
    return false;
  }

  try {
    await navigator.share(payload);
    return true;
  } catch {
    return false;
  }
};
