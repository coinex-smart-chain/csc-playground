import { createStore } from "reusable";
import useUISchema from "../hooks/useUISchema";
import queryParamsStore from "./queryParamsStore";
import { mergeUISchema } from "../UISchema";

export default createStore(() => {
  const [query] = queryParamsStore();

  const defaultUISchema = {
    appBar: {
      "ui:input": false,
      "ui:inputPlaceholder": "Enter OpenRPC Document Url or rpc.discover Endpoint",
      /* tslint:disable */
      "ui:logoUrl": "https://raw.githubusercontent.com/coinex-smart-chain/docs/master/images/favicon.ico",
      /* tslint:enable */
      "ui:splitView": false,
      "ui:darkMode": false,
      "ui:title": "CoinEx Smart Chain",
      "ui:examplesDropdown": false,
    },
    methods: {
      "ui:defaultExpanded": false,
      "ui:methodPlugins": true,
    },
    params: {
      "ui:defaultExpanded": false,
    },
  };
  return useUISchema(mergeUISchema(defaultUISchema, query.uiSchema));
});
