const Enum = require("./Enum.js");

class MoviesEnum extends Enum {
  static createSuccess = new MoviesEnum("Created successfully");
  static informationMissing = new MoviesEnum(
    "Creation failed. Missing information."
  );
  static internalError = new MoviesEnum(
    "An error has occured. Please, try again or contact us."
  );
  static idNotFound = new MoviesEnum("Id not found");
  static titleNotFound = new MoviesEnum("Title not found");
  static notFound = new MoviesEnum("Movie not found");
  static updateSucess = new MoviesEnum("update successfully");
  static deleteSucess = new MoviesEnum("Deleted successfully");
}

module.exports = MoviesEnum;
