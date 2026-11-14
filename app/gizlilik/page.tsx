import { redirect } from 'next/navigation';

/** Eski URL — yeni gizlilik politikasına yönlendirir */
export default function LegacyPrivacyRedirect() {
  redirect('/gizlilik-politikasi');
}
