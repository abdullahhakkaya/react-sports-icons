# @abdullahakkaya/sports-react-icons

A React sports icon library generated from the SVG files in the `svgs` folder.

## Installation

```bash
npm install @abdullahakkaya/sports-react-icons
```

## Usage

```tsx
import { FootballIcon, BasketballIcon, TennisIcon } from "@abdullahakkaya/sports-react-icons";

export function Example() {
  return (
    <div style={{ display: "flex", gap: 16 }}>
      <FootballIcon size={24} />
      <BasketballIcon size={32} />
      <TennisIcon size={40} aria-label="Tennis icon" />
    </div>
  );
}
```

## Props

All icons accept `IconProps`:

- `size?: number | string` (default: `24`)
- `className?: string`
- `style?: React.CSSProperties`
- all standard SVG props (`onClick`, `aria-label`, etc.)

## Icons

- `ArcheryIcon`
- `BadmintonIcon`
- `BasketballIcon`
- `FootballIcon`
- `GymnasticsIcon`
- `KarateIcon`
- `MartialArtsIcon`
- `PingPongIcon`
- `SwimmingIcon`
- `TaekwondoIcon`
- `TennisIcon`
- `VolleyballIcon`
- `WrestlingIcon`

## Preview

| Icon | Preview |
| --- | --- |
| `ArcheryIcon` | <img src="https://raw.githubusercontent.com/abdullahhakkaya/react-sports-icons/main/svgs/target-archer-svgrepo-com.svg" alt="Archery icon" width="72" /> |
| `BadmintonIcon` | <img src="https://raw.githubusercontent.com/abdullahhakkaya/react-sports-icons/main/svgs/badminton-svgrepo-com.svg" alt="Badminton icon" width="72" /> |
| `BasketballIcon` | <img src="https://raw.githubusercontent.com/abdullahhakkaya/react-sports-icons/main/svgs/basketball-goal-svgrepo-com.svg" alt="Basketball icon" width="72" /> |
| `FootballIcon` | <img src="https://raw.githubusercontent.com/abdullahhakkaya/react-sports-icons/main/svgs/football-soccer-svgrepo-com.svg" alt="Football icon" width="72" /> |
| `GymnasticsIcon` | <img src="https://raw.githubusercontent.com/abdullahhakkaya/react-sports-icons/main/svgs/woman-cartwheeling-medium-light-skin-tone-svgrepo-com.svg" alt="Gymnastics icon" width="72" /> |
| `KarateIcon` | <img src="https://raw.githubusercontent.com/abdullahhakkaya/react-sports-icons/main/svgs/karate-fighter-svgrepo-com.svg" alt="Karate icon" width="72" /> |
| `MartialArtsIcon` | <img src="https://raw.githubusercontent.com/abdullahhakkaya/react-sports-icons/main/svgs/martial-arts-uniform-svgrepo-com.svg" alt="Martial arts icon" width="72" /> |
| `PingPongIcon` | <img src="https://raw.githubusercontent.com/abdullahhakkaya/react-sports-icons/main/svgs/ping-pong-svgrepo-com.svg" alt="Ping pong icon" width="72" /> |
| `SwimmingIcon` | <img src="https://raw.githubusercontent.com/abdullahhakkaya/react-sports-icons/main/svgs/swimming-swim-svgrepo-com.svg" alt="Swimming icon" width="72" /> |
| `TaekwondoIcon` | <img src="https://raw.githubusercontent.com/abdullahhakkaya/react-sports-icons/main/svgs/taekwondo-svgrepo-com.svg" alt="Taekwondo icon" width="72" /> |
| `TennisIcon` | <img src="https://raw.githubusercontent.com/abdullahhakkaya/react-sports-icons/main/svgs/tennis-svgrepo-com.svg" alt="Tennis icon" width="72" /> |
| `VolleyballIcon` | <img src="https://raw.githubusercontent.com/abdullahhakkaya/react-sports-icons/main/svgs/volleyball-svgrepo-com.svg" alt="Volleyball icon" width="72" /> |
| `WrestlingIcon` | <img src="https://raw.githubusercontent.com/abdullahhakkaya/react-sports-icons/main/svgs/people-wrestling-light-skin-tone-svgrepo-com.svg" alt="Wrestling icon" width="72" /> |

## Attribution

SVG assets in this library were sourced from:

- https://www.svgrepo.com

## Development

```bash
npm install
npm run build
```

`npm run build` first converts SVG files into React components, then builds the package into `dist/`.
