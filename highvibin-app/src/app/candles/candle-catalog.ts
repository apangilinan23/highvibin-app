export interface Candle {
  id: string;
  name: string;
  scent: string;
  price: string;
  image: string;
  gradient: string;
}

export const CANDLE_CATALOG: Candle[] = [
  {
    id: 'sunrise-citrus',
    name: 'Sunrise Citrus',
    scent:
      'Bright bergamot and juicy sweet orange open with a clean sparkling lift, then settle into a soft honey-citrus finish that keeps your room warm and energized.',
    price: '$18',
    image: '/candles/sunrise-citrus.svg',
    gradient: 'linear-gradient(135deg, #f59e0b, #fb7185)',
  },
  {
    id: 'moonlit-linen',
    name: 'Moonlit Linen',
    scent:
      'Powdery white musk and fresh cotton create a calm, just-laundered atmosphere with a smooth airy trail that feels like open windows on a quiet evening.',
    price: '$22',
    image: '/candles/moonlit-linen.svg',
    gradient: 'linear-gradient(135deg, #0ea5e9, #14b8a6)',
  },
  {
    id: 'sandal-ritual',
    name: 'Sandal Ritual',
    scent:
      'Creamy sandalwood layered with rich amber resin delivers a deep meditative aroma, grounding the space with smooth woody notes and subtle golden warmth.',
    price: '$26',
    image: '/candles/sandal-ritual.svg',
    gradient: 'linear-gradient(135deg, #b45309, #7c3aed)',
  },
  {
    id: 'lavender-drift',
    name: 'Lavender Drift',
    scent:
      'French lavender blooms first, followed by velvety vanilla cream for a relaxing blend that feels dreamy, floral, and gently comforting at the end of the day.',
    price: '$19',
    image: '/candles/lavender-drift.svg',
    gradient: 'linear-gradient(135deg, #6366f1, #ec4899)',
  },
  {
    id: 'forest-aura',
    name: 'Forest Aura',
    scent:
      'Green cedar leaf and cool eucalyptus bring a crisp woodland breeze indoors, balancing earthy depth with a clear herbal freshness that resets your mood.',
    price: '$24',
    image: '/candles/forest-aura.svg',
    gradient: 'linear-gradient(135deg, #16a34a, #0f766e)',
  },
  {
    id: 'spiced-nectar',
    name: 'Spiced Nectar',
    scent:
      'Toasty clove and cinnamon swirl with golden honey for a bold, cozy blend that fills the room with festive spice and a sweet amber glow.',
    price: '$27',
    image: '/candles/spiced-nectar.svg',
    gradient: 'linear-gradient(135deg, #ea580c, #dc2626)',
  },
];
