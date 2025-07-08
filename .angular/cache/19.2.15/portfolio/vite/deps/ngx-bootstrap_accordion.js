import {
  CollapseDirective,
  CollapseModule
} from "./chunk-H5GENKGL.js";
import "./chunk-JIEX5QP7.js";
import "./chunk-SZJPLAKF.js";
import {
  NgClass,
  NgIf
} from "./chunk-ZXYMGHN5.js";
import {
  Component,
  EventEmitter,
  HostBinding,
  Inject,
  Injectable,
  Input,
  NgModule,
  Output,
  setClassMetadata,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-7FWNPWRU.js";

// node_modules/ngx-bootstrap/accordion/fesm2022/ngx-bootstrap-accordion.mjs
var _c0 = ["*"];
var _c1 = [[["", "accordion-heading", ""]], "*"];
var _c2 = ["[accordion-heading]", "*"];
var _c3 = (a0) => ({
  "text-muted": a0
});
function AccordionPanelComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "button", 7);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction1(2, _c3, ctx_r0.isDisabled));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.heading, " ");
  }
}
var AccordionConfig = class _AccordionConfig {
  constructor() {
    this.closeOthers = false;
    this.isAnimated = false;
  }
  static {
    this.ɵfac = function AccordionConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AccordionConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AccordionConfig,
      factory: _AccordionConfig.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var AccordionComponent = class _AccordionComponent {
  constructor(config) {
    this.isAnimated = false;
    this.closeOthers = false;
    this.groups = [];
    Object.assign(this, config);
  }
  closeOtherPanels(openGroup) {
    if (!this.closeOthers) {
      return;
    }
    this.groups.forEach((group) => {
      if (group !== openGroup) {
        group.isOpen = false;
      }
    });
  }
  addGroup(group) {
    group.isAnimated = this.isAnimated;
    this.groups.push(group);
  }
  removeGroup(group) {
    const index = this.groups.indexOf(group);
    if (index !== -1) {
      this.groups.splice(index, 1);
    }
  }
  static {
    this.ɵfac = function AccordionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AccordionComponent)(ɵɵdirectiveInject(AccordionConfig));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _AccordionComponent,
      selectors: [["accordion"]],
      hostAttrs: ["role", "tablist", 1, "panel-group", 2, "display", "block"],
      hostVars: 1,
      hostBindings: function AccordionComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("aria-multiselectable", ctx.closeOthers);
        }
      },
      inputs: {
        isAnimated: "isAnimated",
        closeOthers: "closeOthers"
      },
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function AccordionComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionComponent, [{
    type: Component,
    args: [{
      selector: "accordion",
      template: `<ng-content></ng-content>`,
      host: {
        "[attr.aria-multiselectable]": "closeOthers",
        role: "tablist",
        class: "panel-group",
        style: "display: block"
      },
      standalone: true
    }]
  }], () => [{
    type: AccordionConfig
  }], {
    isAnimated: [{
      type: Input
    }],
    closeOthers: [{
      type: Input
    }]
  });
})();
var AccordionPanelComponent = class _AccordionPanelComponent {
  // Questionable, maybe .panel-open should be on child div.panel element?
  /** Is accordion group open or closed. This property supports two-way binding */
  get isOpen() {
    return this._isOpen;
  }
  set isOpen(value) {
    if (value !== this.isOpen) {
      if (value) {
        this.accordion.closeOtherPanels(this);
      }
      this._isOpen = value;
      Promise.resolve(null).then(() => {
        this.isOpenChange.emit(value);
      });
    }
  }
  constructor(accordion) {
    this.isAnimated = false;
    this.panelClass = "panel-default";
    this.isDisabled = false;
    this.isOpenChange = new EventEmitter();
    this._isOpen = false;
    this.accordion = accordion;
  }
  ngOnInit() {
    this.accordion.addGroup(this);
  }
  ngOnDestroy() {
    this.accordion.removeGroup(this);
  }
  toggleOpen() {
    if (!this.isDisabled) {
      this.isOpen = !this.isOpen;
    }
  }
  static {
    this.ɵfac = function AccordionPanelComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AccordionPanelComponent)(ɵɵdirectiveInject(AccordionComponent));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _AccordionPanelComponent,
      selectors: [["accordion-group"], ["accordion-panel"]],
      hostAttrs: [1, "panel", 2, "display", "block"],
      hostVars: 2,
      hostBindings: function AccordionPanelComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("panel-open", ctx.isOpen);
        }
      },
      inputs: {
        heading: "heading",
        panelClass: "panelClass",
        isDisabled: "isDisabled",
        isOpen: "isOpen"
      },
      outputs: {
        isOpenChange: "isOpenChange"
      },
      ngContentSelectors: _c2,
      decls: 9,
      vars: 6,
      consts: [[1, "panel", "card", 3, "ngClass"], ["role", "tab", 1, "panel-heading", "card-header", 3, "click", "ngClass"], [1, "panel-title"], ["role", "button", 1, "accordion-toggle"], ["class", "btn btn-link", "type", "button", 3, "ngClass", 4, "ngIf"], ["role", "tabpanel", 1, "panel-collapse", "collapse", 3, "collapse", "isAnimated"], [1, "panel-body", "card-block", "card-body"], ["type", "button", 1, "btn", "btn-link", 3, "ngClass"]],
      template: function AccordionPanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef(_c1);
          ɵɵelementStart(0, "div", 0)(1, "div", 1);
          ɵɵlistener("click", function AccordionPanelComponent_Template_div_click_1_listener() {
            return ctx.toggleOpen();
          });
          ɵɵelementStart(2, "div", 2)(3, "div", 3);
          ɵɵtemplate(4, AccordionPanelComponent_button_4_Template, 2, 4, "button", 4);
          ɵɵprojection(5);
          ɵɵelementEnd()()();
          ɵɵelementStart(6, "div", 5)(7, "div", 6);
          ɵɵprojection(8, 1);
          ɵɵelementEnd()()();
        }
        if (rf & 2) {
          ɵɵproperty("ngClass", ctx.panelClass);
          ɵɵadvance();
          ɵɵproperty("ngClass", ctx.isDisabled ? "panel-disabled" : "panel-enabled");
          ɵɵadvance(2);
          ɵɵattribute("aria-expanded", ctx.isOpen);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.heading);
          ɵɵadvance(2);
          ɵɵproperty("collapse", !ctx.isOpen)("isAnimated", ctx.isAnimated);
        }
      },
      dependencies: [NgClass, NgIf, CollapseModule, CollapseDirective],
      styles: ["[_nghost-%COMP%]   .card-header.panel-enabled[_ngcontent-%COMP%]{cursor:pointer}[_nghost-%COMP%]   .card-header.panel-disabled[_ngcontent-%COMP%]   .btn.btn-link[_ngcontent-%COMP%]{cursor:default;text-decoration:none}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionPanelComponent, [{
    type: Component,
    args: [{
      selector: "accordion-group, accordion-panel",
      host: {
        class: "panel",
        style: "display: block"
      },
      standalone: true,
      imports: [NgClass, NgIf, CollapseModule],
      template: `<div class="panel card" [ngClass]="panelClass">
  <div
    class="panel-heading card-header"
    role="tab"
    (click)="toggleOpen()"
    [ngClass]="isDisabled ? 'panel-disabled' : 'panel-enabled'"
  >
    <div class="panel-title">
      <div role="button" class="accordion-toggle" [attr.aria-expanded]="isOpen">
        <button class="btn btn-link" *ngIf="heading" [ngClass]="{ 'text-muted': isDisabled }" type="button">
          {{ heading }}
        </button>
        <ng-content select="[accordion-heading]"></ng-content>
      </div>
    </div>
  </div>
  <div class="panel-collapse collapse" role="tabpanel" [collapse]="!isOpen" [isAnimated]="isAnimated">
    <div class="panel-body card-block card-body">
      <ng-content></ng-content>
    </div>
  </div>
</div>
`,
      styles: [":host .card-header.panel-enabled{cursor:pointer}:host .card-header.panel-disabled .btn.btn-link{cursor:default;text-decoration:none}\n"]
    }]
  }], () => [{
    type: AccordionComponent,
    decorators: [{
      type: Inject,
      args: [AccordionComponent]
    }]
  }], {
    heading: [{
      type: Input
    }],
    panelClass: [{
      type: Input
    }],
    isDisabled: [{
      type: Input
    }],
    isOpenChange: [{
      type: Output
    }],
    isOpen: [{
      type: HostBinding,
      args: ["class.panel-open"]
    }, {
      type: Input
    }]
  });
})();
var AccordionModule = class _AccordionModule {
  // @deprecated method not required anymore, will be deleted in v19.0.0
  static forRoot() {
    return {
      ngModule: _AccordionModule,
      providers: []
    };
  }
  static {
    this.ɵfac = function AccordionModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AccordionModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AccordionModule,
      imports: [AccordionComponent, AccordionPanelComponent],
      exports: [AccordionComponent, AccordionPanelComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [AccordionPanelComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionModule, [{
    type: NgModule,
    args: [{
      imports: [AccordionComponent, AccordionPanelComponent],
      exports: [AccordionComponent, AccordionPanelComponent]
    }]
  }], null, null);
})();
export {
  AccordionComponent,
  AccordionConfig,
  AccordionModule,
  AccordionPanelComponent
};
//# sourceMappingURL=ngx-bootstrap_accordion.js.map
