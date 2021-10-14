
//
// StyleDictionaryColor.h
//

// Do not edit directly
// Generated on Thu, 14 Oct 2021 14:36:07 GMT


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
