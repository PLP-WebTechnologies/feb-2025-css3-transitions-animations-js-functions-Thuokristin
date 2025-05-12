function savePreference(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      console.log(`Preference '${key}' saved as:`, value);
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }
  
  function getPreference(key) {
    try {
      const storedValue = localStorage.getItem(key);
      if (storedValue === null) {
        return null;
      }
      return JSON.parse(storedValue);
    } catch (error) {
      console.error("Error retrieving from localStorage:", error);
      return null;
    }
  }
  
  // Example usage:
  savePreference('theme', 'dark');
  const currentTheme = getPreference('theme');
  console.log('Current theme:', currentTheme);
  
  savePreference('animationEnabled', true);
  const animationSetting = getPreference('animationEnabled');
  console.log('Animation enabled:', animationSetting);