import { DataRetrievalStrategy } from "./Author";
import { HTMLListStrategy } from "./HTMLListStrategy";
import { HTMLTableStrategy } from "./HTMLTableStrategy";
import { JSONStrategy } from "./JSONStrategy";

export default class DataRetrievalStrategyFactory {
  createStrategy(type: string): DataRetrievalStrategy {
    switch (type) {
      case "table":
        return new HTMLTableStrategy();
      case "list":
        return new HTMLListStrategy();
      case "json":
        return new JSONStrategy();
      default:
        throw new Error("Unknown strategy type");
    }
  }
}
