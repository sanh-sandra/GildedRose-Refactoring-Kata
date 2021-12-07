import { Item, GildedRose } from "@/gilded-rose";

describe("Update Item Quality", () => {
  describe("Item not Aged Brie nor Backstage concert", () => {
    it("Item has quality 0", () => {
      const initialSellIn = 0;
      const initialQuality = 0;
      const initialName = "foo";

      const expectedName = "foo";
      const expectedQuality = 0;

      const gildedRose = new GildedRose([
        new Item(initialName, initialSellIn, initialQuality),
      ]);

      const items = gildedRose.updateQuality();

      expect(items[0].name).toBe(expectedName);
      expect(items[0].quality).toBe(expectedQuality);
    });

    it("Item with positif quality and sellIn 0 should update to quality 0", () => {
      const initialSellIn = 0;
      const initialQuality = 1;
      const initialName = "foo";

      const expectedName = "foo";
      const expectedQuality = 0;
      const expectedSellIn = -1;

      const gildedRose = new GildedRose([
        new Item(initialName, initialSellIn, initialQuality),
      ]);

      const items = gildedRose.updateQuality();

      expect(items[0].name).toBe(expectedName);
      expect(items[0].quality).toBe(expectedQuality);
      expect(items[0].sellIn).toBe(expectedSellIn);
    });

    it("Item is Sulfuras", () => {
      const initialSellIn = 0;
      const initialQuality = 80;
      const initialName = "Sulfuras, Hand of Ragnaros";

      const expectedName = "Sulfuras, Hand of Ragnaros";
      const expectedQuality = 80;

      const gildedRose = new GildedRose([
        new Item(initialName, initialSellIn, initialQuality),
      ]);

      const items = gildedRose.updateQuality();

      expect(items[0].name).toBe(expectedName);
      expect(items[0].quality).toBe(expectedQuality);
    });
  });

  describe("Item is Aged Brie ", () => {
    it("Item has quality = 50", () => {
      const initialSellIn = 0;
      const initialQuality = 50;
      const initialName = "Aged Brie";

      const expectedName = "Aged Brie";
      const expectedQuality = 50;
      const expectedSellIn = -1;

      const gildedRose = new GildedRose([
        new Item(initialName, initialSellIn, initialQuality),
      ]);

      const items = gildedRose.updateQuality();

      expect(items[0].name).toBe(expectedName);
      expect(items[0].quality).toBe(expectedQuality);
      expect(items[0].sellIn).toBe(expectedSellIn);
    });

    it("Item has quality less than 50 with sellIn more than 1", () => {
      const initialSellIn = 10;
      const initialQuality = 40;
      const initialName = "Aged Brie";

      const expectedName = "Aged Brie";
      const expectedQuality = 41;
      const expectedSellIn = 9;

      const gildedRose = new GildedRose([
        new Item(initialName, initialSellIn, initialQuality),
      ]);

      const items = gildedRose.updateQuality();

      expect(items[0].name).toBe(expectedName);
      expect(items[0].quality).toBe(expectedQuality);
      expect(items[0].sellIn).toBe(expectedSellIn);
    });

    it("Item has quality less than 50 with sellIn less than 1", () => {
      const initialSellIn = 0;
      const initialQuality = 40;
      const initialName = "Aged Brie";

      const expectedName = "Aged Brie";
      const expectedQuality = 42;
      const expectedSellIn = -1;

      const gildedRose = new GildedRose([
        new Item(initialName, initialSellIn, initialQuality),
      ]);

      const items = gildedRose.updateQuality();

      expect(items[0].name).toBe(expectedName);
      expect(items[0].quality).toBe(expectedQuality);
      expect(items[0].sellIn).toBe(expectedSellIn);
    });
  });

  describe("Item is Backstage concert", () => {
    it("Item has quality less than 50 and sellin less than 11", () => {
      const initialSellIn = 8;
      const initialQuality = 20;
      const initialName = "Backstage passes to a TAFKAL80ETC concert";

      const expectedName = "Backstage passes to a TAFKAL80ETC concert";
      const expectedQuality = 22;
      const expectedSellIn = 7;

      const gildedRose = new GildedRose([
        new Item(initialName, initialSellIn, initialQuality),
      ]);

      const items = gildedRose.updateQuality();

      expect(items[0].name).toBe(expectedName);
      expect(items[0].quality).toBe(expectedQuality);
      expect(items[0].sellIn).toBe(expectedSellIn);
    });

    it("Item has quality less than 50 and sellIn less than 6", () => {
      const initialSellIn = 2;
      const initialQuality = 20;
      const initialName = "Backstage passes to a TAFKAL80ETC concert";

      const expectedName = "Backstage passes to a TAFKAL80ETC concert";
      const expectedQuality = 23;
      const expectedSellIn = 1;

      const gildedRose = new GildedRose([
        new Item(initialName, initialSellIn, initialQuality),
      ]);

      const items = gildedRose.updateQuality();

      expect(items[0].name).toBe(expectedName);
      expect(items[0].quality).toBe(expectedQuality);
      expect(items[0].sellIn).toBe(expectedSellIn);
    });

    it("Item has quality 49 and sellIn less than 6", () => {
      const initialSellIn = 4;
      const initialQuality = 49;
      const initialName = "Backstage passes to a TAFKAL80ETC concert";

      const expectedName = "Backstage passes to a TAFKAL80ETC concert";
      const expectedQuality = 50;
      const expectedSellIn = 3;

      const gildedRose = new GildedRose([
        new Item(initialName, initialSellIn, initialQuality),
      ]);

      const items = gildedRose.updateQuality();

      expect(items[0].name).toBe(expectedName);
      expect(items[0].quality).toBe(expectedQuality);
      expect(items[0].sellIn).toBe(expectedSellIn);
    });

    it("Item has quality 49 and sellIn less than 0", () => {
      const initialSellIn = -1;
      const initialQuality = 20;
      const initialName = "Backstage passes to a TAFKAL80ETC concert";

      const expectedName = "Backstage passes to a TAFKAL80ETC concert";
      const expectedQuality = 0;
      const expectedSellIn = -2;

      const gildedRose = new GildedRose([
        new Item(initialName, initialSellIn, initialQuality),
      ]);

      const items = gildedRose.updateQuality();

      expect(items[0].name).toBe(expectedName);
      expect(items[0].quality).toBe(expectedQuality);
      expect(items[0].sellIn).toBe(expectedSellIn);
    });
  });
});

describe("Update Item SellIn", () => {
  describe("Item is Sulfuras", () => {
    it("sellIn >=0 should not change", () => {
      const initialSellIn = 10;
      const initialQuality = 80;
      const initialName = "Sulfuras, Hand of Ragnaros";

      const expectedName = "Sulfuras, Hand of Ragnaros";
      const expectedSellIn = 10;

      const gildedRose = new GildedRose([
        new Item(initialName, initialSellIn, initialQuality),
      ]);

      const items = gildedRose.updateQuality();

      expect(items[0].name).toBe(expectedName);
      expect(items[0].sellIn).toBe(expectedSellIn);
    });
    it("sellIn <0 should not change", () => {
      const initialSellIn = -10;
      const initialQuality = 80;
      const initialName = "Sulfuras, Hand of Ragnaros";

      const expectedName = "Sulfuras, Hand of Ragnaros";
      const expectedSellIn = -10;

      const gildedRose = new GildedRose([
        new Item(initialName, initialSellIn, initialQuality),
      ]);

      const items = gildedRose.updateQuality();

      expect(items[0].name).toBe(expectedName);
      expect(items[0].sellIn).toBe(expectedSellIn);
    });
  });

  describe("Item is not Sulfuras", () => {
    describe("sellIn >0", () => {
      const initialSellIn = 10;
      const initialQuality = 50;
      const initialName = "foo";

      const expectedName = "foo";
      const expectedSellIn = 9;

      const gildedRose = new GildedRose([
        new Item(initialName, initialSellIn, initialQuality),
      ]);

      const items = gildedRose.updateQuality();

      expect(items[0].name).toBe(expectedName);
      expect(items[0].sellIn).toBe(expectedSellIn);
    });
  });
});
