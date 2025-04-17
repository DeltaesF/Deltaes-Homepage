import Quill from "quill";

const BlockEmbed = Quill.import("blots/block/embed");

class HrBlot extends BlockEmbed {
  static blotName = "hr";
  static tagName = "hr";
}

Quill.register(HrBlot);
