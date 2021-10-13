
//
// StyleDictionaryColor.h
//

// Do not edit directly
// Generated on Wed, 13 Oct 2021 16:40:51 GMT


#import <UIKit/UIKit.h>

typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
ColorBlue50,
ColorBlue100,
ColorBlue200
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end
