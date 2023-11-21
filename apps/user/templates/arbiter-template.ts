import { Attribute } from '../interfaces/user.interface';

export class ArbiterTemplate {
  findAttributeByName(attributes: Attribute[], name: string): Attribute {
    return attributes.find((attr) => name in attr);
  }

  async getArbiterTemplate(attributes: Attribute[]): Promise<string> {
    try {
      const [name, country, issuedBy] = await Promise.all(attributes).then((attributes) => {
        const name = this.findAttributeByName(attributes, 'full_name')?.full_name ?? '';
        const country = this.findAttributeByName(attributes, 'country')?.country ?? '';
        const issuedBy = this.findAttributeByName(attributes, 'issued_by')?.issued_by ?? '';
        return [name, country, issuedBy];
      });
      return `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet">
        <style>
          body {
            margin: 0;
            background-color: #f0f0f0; 
          }
      
          #container {
            padding: 0 20px; 
          }
      
          #backgroundImage {
            width: 100%;
            height: auto;
            display: block;
            margin: 0 auto;
          }
      
          #textOverlay {
          position: absolute;
          top: 280px;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          color: #2B2B2A;
          font-size: 24px; 
            
          }
        </style>
      </head>
      <body>
      
      <div id="container" style="">
      <img id="backgroundImage" src="https://credebl-dev-user-certificate.s3.ap-south-1.amazonaws.com/certificates/background_image.png" alt="background" 
        style="height: 1000px; width: 770px;"
        />
        <div id="textOverlay" style="width: 760px; height: 450px;">
          <div>
              <p style="font-size: 50px; font-family: Inter; margin: 0;">CERTIFICATE</p>
              <p style="font-size: 22px; font-family: Inter; margin: 0;"> OF RECOGNITION</p>
          </div>
          
          <p style="font-size: 15px; font-family: Inter;margin: 15; margin-top: 15px;">IS PROUDLY PRESENTED TO</p>
          <p style="font-size: 35px; font-style: italic; ">${name}</p>
          
          <span >
              <p style="font-size: 16px; " >has served as an Arbiter at the
              <span style="font-size: 16px; font-weight: bold;">${issuedBy} World Memory Championship 2023.</span>
              </p>
          </p>
          <p>
              <p style="font-size: 14px; margin: 0;">Your dedication, professionalism, and impartiality as an Arbiter</p>
              <p style="font-size: 14px; margin: 0;">have significantly contributed to the fair and smooth conduct</p>
              <p style="font-size: 14px; margin: 0;">of the championship. Your commitment to upholding the</p>
              <p style="font-size: 14px; margin: 0;">highest standards of integrity and sportsmanship has</p>
              <p style="font-size: 14px; margin: 0;">played a crucial role in maintaining the credibility of the competition.</p>
      
          </p>
          <div style="font-family: Inter; font-weight: bold; font-size: 12px;">Date: 24, 25, 26 November 2023 | Place: Cidco Exhibition Centre, Navi Mumbai, ${country}</div>
        </div>
      </div>
      
      </body>
      </html>`;
    } catch {}
  }
}