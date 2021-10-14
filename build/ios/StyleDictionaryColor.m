
//
// StyleDictionaryColor.m
//

// Do not edit directly
// Generated on Thu, 14 Oct 2021 14:36:07 GMT


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
[UIColor colorWithRed:0.902f green:0.957f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.529f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.424f blue:0.800f alpha:1.000f]
    ];
  });

  return colorArray;
}

@end
