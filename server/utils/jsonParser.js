const parseJSON = (text) => {
  try {
    return JSON.parse(text);
  } catch (error) {
    // Remove markdown code blocks
    const cleanedText = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(cleanedText);
  }
};

module.exports = parseJSON;
