import { getSkDOM, resolveFile } from "../../renderer/__tests__/setup";
import { setupSkia } from "../../skia/__tests__/setup";
import { processResult } from "../../__tests__/setup";

const roboto = resolveFile("skia/__tests__/assets/Roboto-Regular.ttf");
const noto = resolveFile("skia/__tests__/assets/NotoColorEmoji.ttf");

describe("Paragraph", () => {
  it("should display the paragraph layout properly using the typeface provider", async () => {
    const { surface, ctx, width } = setupSkia();
    const Sk = getSkDOM();
    expect(roboto).toBeDefined();
    expect(noto).toBeDefined();
    ctx.typefaceProvider.registerFont(roboto, "Roboto");
    ctx.typefaceProvider.registerFont(noto, "Noto Color Emoji");
    const root = Sk.Text({
      x: 0,
      y: 0,
      width,
      color: "black",
      fontFamilies: ["Roboto", "Noto Color Emoji"],
      fontSize: 35,
      textAlign: "left",
      maxLines: 4,
      ellipsis: "...",
    });
    root.addChild(
      Sk.Span({
        text: "The quick brown fox 🦊 ate a zesty hamburgerfons 🍔.\nThe 👩‍👩‍👧‍👧 laughed.",
      })
    );
    root.render(ctx);
    processResult(surface, "snapshots/drawings/paragraph.png");
  });
  it("should display the paragraph layout with different text color", async () => {
    const { surface, width, ctx, Skia } = setupSkia();
    const Sk = getSkDOM();
    ctx.typefaceProvider.registerFont(roboto, "Roboto");
    ctx.typefaceProvider.registerFont(noto, "Noto Color Emoji");
    const root = Sk.Text({
      x: 0,
      y: 0,
      width,
      color: "black",
      fontFamilies: ["Roboto", "Noto Color Emoji"],
      fontSize: 16,
      textAlign: "left",
      maxLines: 4,
      ellipsis: "...",
    });
    root.addChild(
      Sk.Span({
        text: "The quick brown fox 🦊",
      })
    );
    const backgroundPaint = Skia.Paint();
    backgroundPaint.setColor(Skia.Color("black"));
    const foregroundPaint = Skia.Paint();
    foregroundPaint.setColor(Skia.Color("white"));
    root.addChild(
      Sk.Span({
        foregroundPaint,
        backgroundPaint,
        text: " ate a zesty hamburgerfons 🍔.",
      })
    );
    root.addChild(
      Sk.Span({
        color: "pink",
        text: "\nThe 👩‍👩‍👧‍👧",
      })
    );
    root.addChild(
      Sk.Span({
        text: " laughed.",
      })
    );
    root.render(ctx);
    processResult(surface, "snapshots/drawings/paragraph-with-colors.png");
  });
});
