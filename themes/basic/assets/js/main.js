document.addEventListener('DOMContentLoaded', function() {
  // Get the cookie consent banner and accept button
  const cookieBanner = document.getElementById('cookie-consent-banner');
  const acceptButton = document.getElementById('cookie-consent-accept');

  // Check if the user has already accepted the cookies
  const hasAcceptedCookies = document.cookie.includes('cookieConsent=true');

  // If the user has already accepted, hide the banner
  if (hasAcceptedCookies) {
    cookieBanner.style.display = 'none';
  }

  // Add an event listener to the accept button
  if (acceptButton) {
    acceptButton.addEventListener('click', () => {
      // Set a cookie to remember the user's consent
      document.cookie = 'cookieConsent=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';

      // Hide the cookie banner
      cookieBanner.style.display = 'none';
    });
  }
});
