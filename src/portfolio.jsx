import Editor from './components/ClippifyComponents/txtEditor/txtEditor';
import AiText from './components/ClippifyComponents/txtEditor/aiText';
import VideoFrame from './components/ClippifyComponents/videoFrame/videoFrame';
import TranscripterConvert from './components/ClippifyComponents/transcriptShow/transcripterConvert';
import StripePanel from './components/ClippifyComponents/Stripe/stripePanel';

import LexicalJPG from './assets/Lexical.jpeg';
import openAiJPG from './assets/openAi.jpeg';
import FFMPEGjpg from './assets/FFMPEG.png';
import SpeechToTextjpg from './assets/SpeechToText.png';
import Stripejpg from './assets/stripeIcon.png';
import FirebaseIcon from './assets/firebaseIcon.png';
import CORSIcon from './assets/CORS4.jpeg';

export const ClippifyData = {
    title: "Clippify",
    youtube: "https://www.youtube.com/embed/xNRJwmlRBNU?si=f7WTiSJIPG9jg3Ad",
    navigation: "https://clippify.net",
    list: [
        "Clip trimming, saving, storing",
        "Machine Learning Model for transcript extraction",
        "Built-in OpenAi API - Fine Tuned",
        "Rich Text Editor",
        "Smooth Subscription and Payment with Stripe API",
        "Firebase Backend"
    ],
    expertise: [
    {
        logo: LexicalJPG,
        title: "Lexical Rich Text Editor",
        text: [
            "• Serialization & Deserialization (HTML, JSON)",
            "• Nodes (Transforms, Overrides)",
            "• Listeners",
            "• Custom Plugins (CODE, MARKDOWN, LINK, LIST)",
        ],
        show: () => <Editor />
      },
      {
        logo: openAiJPG,
        title: "Dealing with Video - FFmpeg",
        text: [
          "Video type manipulation (blob, data:url, base64)",
          "FFmpeg syntax for video manipulation",
          "Timeline Bar from thumbnails"
        ],
        show: () => <AiText />
      },
      {
        logo: FFMPEGjpg,
        title: "Dealing with Video - FFmpeg",
        text: [
          "Video type manipulation (blob, data:url, base64)",
          "FFmpeg syntax for video manipulation",
          "Timeline Bar from thumbnails"
        ],
        show: () => <VideoFrame />
      },
      {
        logo: SpeechToTextjpg,
        title: "Machine Learning Model",
        text: [
            "Video type manipulation (blob, data:url, base64)",
            "FFmpeg syntax for video manipulation",
            "Timeline Bar from thumbnails"
        ],
        show: () => <TranscripterConvert />
      },
      {
        logo: Stripejpg,
        title: "Stripe Payment",
        text: [
            "Video type manipulation (blob, data:url, base64)",
            "FFmpeg syntax for video manipulation",
            "Timeline Bar from thumbnails"
        ],
        show: () => <StripePanel />
      },
      {
        logo: FirebaseIcon,
        title: "User Authentication",
        text: [
            "Video type manipulation (blob, data:url, base64)",
            "FFmpeg syntax for video manipulation",
            "Timeline Bar from thumbnails"
        ],
        show: () => <StripePanel />
      },
      {
        logo: CORSIcon,
        title: "Cross Origin Isolation",
        text: [
            "• Proxy Server",
            "• CORS Policy",
            "• Header Manipulation",
            "• Limitations of Isolation"
        ],
        show: () => <StripePanel />
      },
    ]
};

export const LupodyData = {
    title: "Lupody",
    list: [
      "Clip trimming, saving, storing",
      "Machine Learning Model for transcript extraction",
      "Built in OpenAi API - Fine Tuned",
      "Rich Text Editor",
      "Smooth Subscription and Payment with Stripe API",
      "Firebase Backend"
    ],
    expertise: [
      {
        logo: "https://images.unsplash.com/photo-1631397833242-fc6213046352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xpcHBpZnklMjBsb2dvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        title: "Machine Learning Model",
        text: [
          "Video type manipulation (blob, data:url, base64)",
          "FFmpeg syntax for video manipulation",
          "Timeline Bar from thumbnails"
        ]
      },
      {
        logo: "https://images.unsplash.com/photo-1631397833242-fc6213046352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xpcHBpZnklMjBsb2dvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        title: "Dealing with Video - FFmpeg",
        text: [
          "Video type manipulation (blob, data:url, base64)",
          "FFmpeg syntax for video manipulation",
          "Timeline Bar from thumbnails"
        ]
      },
      {
        logo: "https://images.unsplash.com/photo-1631397833242-fc6213046352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xpcHBpZnklMjBsb2dvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        title: "Dealing with Video - FFmpeg",
        text: [
          "Video type manipulation (blob, data:url, base64)",
          "FFmpeg syntax for video manipulation",
          "Timeline Bar from thumbnails"
        ]
      }
    ]
};

export const LupodyMobileData = {
    title: "LupodyMobile",
    list: [
      "Clip trimming, saving, storing",
      "Machine Learning Model for transcript extraction",
      "Built in OpenAi API - Fine Tuned",
      "Rich Text Editor",
      "Smooth Subscription and Payment with Stripe API",
      "Firebase Backend"
    ],
    expertise: [
      {
        logo: "https://images.unsplash.com/photo-1631397833242-fc6213046352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xpcHBpZnklMjBsb2dvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        title: "Machine Learning Model",
        text: [
          "Video type manipulation (blob, data:url, base64)",
          "FFmpeg syntax for video manipulation",
          "Timeline Bar from thumbnails"
        ]
      },
      {
        logo: "https://images.unsplash.com/photo-1631397833242-fc6213046352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xpcHBpZnklMjBsb2dvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        title: "Dealing with Video - FFmpeg",
        text: [
          "Video type manipulation (blob, data:url, base64)",
          "FFmpeg syntax for video manipulation",
          "Timeline Bar from thumbnails"
        ]
      },
      {
        logo: "https://images.unsplash.com/photo-1631397833242-fc6213046352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xpcHBpZnklMjBsb2dvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        title: "Dealing with Video - FFmpeg",
        text: [
          "Video type manipulation (blob, data:url, base64)",
          "FFmpeg syntax for video manipulation",
          "Timeline Bar from thumbnails"
        ]
      }
    ]
};

export const ClippifyMobileData = {
    title: "ClippifyMobile",
    list: [
      "Clip trimming, saving, storing",
      "Machine Learning Model for transcript extraction",
      "Built in OpenAi API - Fine Tuned",
      "Rich Text Editor",
      "Smooth Subscription and Payment with Stripe API",
      "Firebase Backend"
    ],
    expertise: [
      {
        logo: "https://images.unsplash.com/photo-1631397833242-fc6213046352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xpcHBpZnklMjBsb2dvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        title: "Machine Learning Model",
        text: [
          "Video type manipulation (blob, data:url, base64)",
          "FFmpeg syntax for video manipulation",
          "Timeline Bar from thumbnails"
        ]
      },
      {
        logo: "https://images.unsplash.com/photo-1631397833242-fc6213046352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xpcHBpZnklMjBsb2dvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        title: "Dealing with Video - FFmpeg",
        text: [
          "Video type manipulation (blob, data:url, base64)",
          "FFmpeg syntax for video manipulation",
          "Timeline Bar from thumbnails"
        ]
      },
      {
        logo: "https://images.unsplash.com/photo-1631397833242-fc6213046352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xpcHBpZnklMjBsb2dvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        title: "Dealing with Video - FFmpeg",
        text: [
          "Video type manipulation (blob, data:url, base64)",
          "FFmpeg syntax for video manipulation",
          "Timeline Bar from thumbnails"
        ]
      }
    ]
};
