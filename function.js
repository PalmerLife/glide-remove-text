window.function = function(initialString, textToRemove) {
  // Ensure both inputs are not null and convert them to string values.
  const originalText = initialString.value ?? "";
  const textToExclude = textToRemove.value ?? "";

  // Remove the specified text from the original text.
  const result = originalText.replace(textToExclude, "").trim();

  return result;
}
