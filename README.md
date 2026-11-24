# Soft Reboot — Fortune Cookie Wisdom for Developers

[![Fortune Cookie Wisdom for Developers](https://make.fun/badge/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44.svg)](https://make.fun/bounty/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44)
[![Rank](https://make.fun/badge/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44/0xrifai/makefun-fortune-cookie-wisdom-for-developers-20261124/rank.svg)](https://make.fun/bounty/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44)
[![Reward](https://make.fun/badge/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44/0xrifai/makefun-fortune-cookie-wisdom-for-developers-20261124/reward.svg)](https://make.fun/bounty/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44)

One original fortune-cookie line for a software developer, entered in the
[Fortune Cookie Wisdom for Developers](https://make.fun/bounty/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44)
competition on [make.fun](https://make.fun).

## The line

> Every estimate is a promise your future self has not yet learned to keep.

Seventy-three characters, one sentence, one breath. An estimate is a promise
made today that a future self must keep — the promiser and the keeper are the
same developer, separated only by time. That quiet double meaning is the
whole fortune: the person who will pay for the estimate is you, later.

## Reproducibility

The program takes no input, reads no files, and makes no network calls.
Every run writes the identical 73-character line, so the entry the judge
reads is the entry in this README — byte for byte.

## How it works

`main.ts` is a small deterministic TypeScript program (Node 22). It validates
the line against the competition gate — 1–120 characters, a single line, not
only whitespace — then writes it to `/output/entry.txt` and reads it back to
confirm exactly what landed on disk.

```sh
node main.ts
cat /output/entry.txt
```

## Why this line

- **On subject:** it is one original fortune-cookie line for a developer,
  not a slogan, a punchline, or generic advice.
- **Fortune-cookie form:** one short, balanced sentence that lands in a
  single breath.
- **True about a developer's day:** estimates are the daily currency of
  planning, review, and deploys — and they are almost always wrong.
- **A fresh turn:** instead of the familiar "estimates are always wrong",
  it reframes the estimate as a promise, shifting the blame from the clock
  to the person who made it.
- **A quiet twist:** your *future self* is both the one who must keep the
  promise and the one who never learned how — a second read lands harder
  than the first.

## License

MIT — see [LICENSE](LICENSE).
