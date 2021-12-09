export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  decreaseQuality(value: number){
    this.quality = Math.max(0, this.quality - value);
  }

  increaseQuality(value: number){
    this.quality = Math.min(50, this.quality + value);
  }

  decreaseSellIn(value: number){
      this.sellIn -= value;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.isRegularItem(this.items[i])) {
        this.updateRegularItemQualityAndSellIn(i)
      }
      else if (this.items[i].name == 'Aged Brie') {
        this.updateAgedBrieQualityAndSellIn(i);
      }
      else if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
        this.updateBackstagePassQualityAndSellIn(i);
      }
    }

    return this.items;
  }

  private updateBackstagePassQualityAndSellIn(i: number) {
    if (this.items[i].sellIn>=11){
      this.items[i].increaseQuality(1)
    }
    else if (this.items[i].sellIn>= 6 && this.items[i].sellIn < 11) {
      this.items[i].increaseQuality(2)
    }
    else if (this.items[i].sellIn < 6) {
      this.items[i].increaseQuality(3)
    }
    this.items[i].decreaseSellIn(1);
    if (this.items[i].sellIn < 0) {
      this.items[i].quality = 0;
    }
  }

  private updateAgedBrieQualityAndSellIn(i: number) {
    this.items[i].increaseQuality(1);
    this.items[i].decreaseSellIn(1);
    if (this.items[i].sellIn < 0){
      this.items[i].increaseQuality(1);
    }
  }

  private updateRegularItemQualityAndSellIn(i: number) {
    this.items[i].decreaseQuality(1);
    this.items[i].decreaseSellIn(1);
    if (this.items[i].sellIn == 0){
      this.items[i].quality = 0;
    }
  }

  isRegularItem(item: Item){
    return item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert' && item.name != 'Sulfuras, Hand of Ragnaros'
  }
}
