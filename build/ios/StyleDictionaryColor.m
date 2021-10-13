
//
// StyleDictionaryColor.m
//

// Do not edit directly
// Generated on Wed, 13 Oct 2021 15:50:14 GMT


#import "StyleDictionaryColor.h"

@implementation StyleDictionaryColor

+ (UIColor *)color:(StyleDictionaryColorName)colorEnum{
  return [[self values] objectAtIndex:colorEnum];
}

+ (NSArray *)values {
  static NSArray* colorArray;
  static dispatch_once_t onceToken;

  dispatch_once(&onceToken, ^{
    colorArray = @[
#e6f4ffff,
#0087ffff,
#006cccff
    ];
  });

  return colorArray;
}

@end
