
//
// StyleDictionaryColor.h
//

// Do not edit directly
// Generated on Wed, 13 Oct 2021 15:50:14 GMT


#import <UIKit/UIKit.h>

typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
ColorsBlue50,
ColorsBlue100,
ColorsBlue200
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end
