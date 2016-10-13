import * as i18next from 'i18next';

var newi18n = i18next.init({
    lng: 'en',
    resources: {
        en: {
            translation: {
                CANCEL: 'Cancel',
                HOLD: 'Hold',
                PAYMENT: 'Payment',
                OPTIONS: 'Options',
                VENDOR: 'Vendor',
                PRICE: 'Price',
                TOTAL: 'Total',
                FAVORITES: 'Favorites',
                ALL: 'All',
                BOOKMARKS: 'Bookmarks',
                NAME: 'Name',
                CODE: 'Code',
                REPORTS: 'Reports',
                TOURS: 'Tours',
                GROUPS: 'Groups',
                SIGN_IN: 'Sign in',
                LOGIN: 'Login',
                USER_NAME: 'User name',
                PASSWORD: 'Password',
                COPYRIGHT: 'Copyright',                
                PROFILE: 'Profile',
            }
        },
        am: {
            translation: {
                CANCEL: 'ተወው',
                HOLD: 'ያዝ',
                PAYMENT: 'ክፍያ',
                OPTIONS: 'ምርጫዎች',
                VENDOR: 'ሻጭ',
                PRICE: 'ዋጋ',
                TOTAL: 'ጠቅላላ',
                FAVORITES: 'ተወዳጅ',
                ALL: 'ሁሉም',
                BOOKMARKS: 'ተወዳጅ',
                NAME: 'ስም',
                CODE: 'መለያ ቁጥር',
                REPORTS: 'ዘገባዎች',
                TOURS: 'አስጎብኚዎች',
                GROUPS: 'ቡድኖች',
                SIGN_IN: 'መግቢያ',
                LOGIN: 'መግቢያ',
                USER_NAME: 'ስም',
                PASSWORD: 'የይለፍ ቃል',
                COPYRIGHT: 'መብቱ በህግ የተጠበቀ ነው',                
                PROFILE: 'ስም',
            }
        }
    }
},
function(err, t) {
    
});

export var i18n:I18next.I18n = newi18n;