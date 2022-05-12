import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import SvgLogotype from './../assets/icons/Logotype';
import SvgBag from './../assets/icons/Bag';
import SvgHeart from './../assets/icons/Heart';
import SvgUser from './../assets/icons/User';
import theme from '../theme/theme';
function Tabbar({ state, descriptors, navigation }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: theme.colors.white,
        opacity: 0.9,
        elevation: 1,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            style={styles.tab}
            key={index}
          >
            {label === 'Home' && (
              <>
                <SvgLogotype
                  fill={
                    isFocused ? theme.colors.black : theme.colors.granita400
                  }
                />
              </>
            )}
            {label === 'Bag' && (
              <SvgBag
                fill={isFocused ? theme.colors.black : theme.colors.granita400}
              />
            )}
            {label === 'Favorite' && (
              <SvgHeart
                fill={isFocused ? theme.colors.black : theme.colors.granita400}
              />
            )}
            {label === 'Account' && (
              <SvgUser
                fill={isFocused ? theme.colors.black : theme.colors.granita400}
              />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 64,
  },
});
export default Tabbar;
