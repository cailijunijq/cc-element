import { makeInstaller } from "@cc-element/utils";
import components from "./components";
import "@cc-element/theme/index.css";

const install = makeInstaller(components);

export * from "@cc-element/components";
export default install; // 全局挂载的导出全部
