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
    this.quality -= value;
  }

  increaseQuality(value: number){
    this.quality += value;
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
      if (this.items[i].name == 'Sulfuras, Hand of Ragnaros') {break;}
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].quality > 0) {
          this.items[i].decreaseQuality(1)
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].increaseQuality(1)
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality < 50) {
              if (this.items[i].sellIn < 11) {
                this.items[i].increaseQuality(1)
              }
              if (this.items[i].sellIn < 6) {
                this.items[i].increaseQuality(1)
              }
            }
          }
        }
      }
      this.items[i].decreaseSellIn(1);
      if (this.items[i].sellIn < 0) {
        switch (this.items[i].name) {
          case 'Aged Brie':
            if (this.items[i].quality < 50) {
              this.items[i].increaseQuality(1)
            } break
          case 'Backstage passes to a TAFKAL80ETC concert':
            this.items[i].quality = 0; break
          default :
            if (this.items[i].quality > 0) {
              this.items[i].decreaseQuality(1)
            } break
        }
      }
    }

    return this.items;
  }
}
