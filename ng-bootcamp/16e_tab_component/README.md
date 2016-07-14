uses: isolated scope, directive controllers, link function, transclusion

Create a component that displays a set of tabs. Each tab can be clicked to
display the content of the tab. The tabs should be displayed as a horizontal
list at the top of the page. The selected tab should be highlighted.

**Step by step:**

1. Create directives for `tabs` and `tab` components. They should restrict to "E", transclude to show inner content, have a template (using `ng-transclude`) and isolate the scope.

2. Create a controller called `TabsCtrl`.

3. Add the `controller` property to the `tabs` directive and set its value to `TabsCtrl as tabs` using the "controller as" approach.

4. Add the `require` property to the `tab` component and set its value to `^tabs` to designate its parent as the `tabs` directive. Create a `link` property and set its value to a function with the arguments `scope, element, attrs, tabCtrl`. This allows you to use the `TabCtrl` as an api and register the `tab` scope with the `tabs` directive.

5. Create a `registerTab` method on the `TabsCtrl` that accepts a `tab` as an argument. Call `tabsCtrl.registerTab(scope)` from the `tab` directive's `link` function.

6. Create an array called `tabs.registeredTabs` on the `TabsCtrl`. In the `registerTab` method, `push` the `tab` onto the array to store it. This is also a good time to check if `!tabs.selectedTab` and set the `tab` as the `tabs.selectedTab` and its `selected` property to `true`.

7. Use `ng-repeat` in the `tabs` directive's template on a `li` to create the list of tabs. Be sure to update the `scope` of the `tab` directive to include a `label` property. Set its value to `@` for string/attribute binding.

8. Add an `ng-click` to the repeated `li` element and call `tabs.selectTab(tab)`. Set the currently selected tab's `selected` property to false and select the clicked tab.

9. Use `ng-class="`{selected: tab.selected}`"` to progamatically add/remove a `selected` class. 