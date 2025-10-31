import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import {
  SjStyle,
  sj,
  SJ_BASE_COMPONENTS_IMPORTS,
  SjRootApi,
  SjDirective,
} from "super-jss";

@Component({
  standalone: true,
  selector: "app-section",
  imports: [CommonModule, ...SJ_BASE_COMPONENTS_IMPORTS],
  template: `
    <sj-paper useRounded variant="outlined" [sj]="[sj.mt(1)]">
      <sj-flex useCol useGap="default" [usePadding]="2">
        <sj-typography variant="h6">{{ title }}</sj-typography>
        <ng-content></ng-content>
      </sj-flex>
    </sj-paper>
  `,
})
export class SectionContainerComponent {
  @Input() title: string = "";
  readonly sj: SjRootApi = sj;
}

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, SjDirective],
  template: `
    <!-- Outer: center content horizontally -->
    <div [sj]="[sj.d('flex'), sj.fxJustify(sj.justifyContent.options.center)]">
      <!-- Inner: max-width container using only [sj] -->
      <div
        [sj]="[
          sj.maxWidth('800px'),
          sj.w('100%'),
          sj.p(sj.padding.options.default),
          sj.d('flex'),
          sj.fxDir(sj.flexDirection.options.column),
          sj.gap(sj.gap.options.default)
        ]"
      >
        <!-- Story: 1) Theme + tokens (hero) -->
        <div
          [sj]="[
            sj.d('flex'),
            sj.fxDir(sj.flexDirection.options.column),
            sj.fxAItems(sj.alignItems.options.center),
            sj.gap(0.5),
            sj.p(sj.padding.options.default),
            sj.brad(0.5),
            sj.bg(sj.palette.primary.main),
            sj.c(sj.palette.primary.contrast),
            sj.boxShadow('0 10px 30px rgba(0,0,0,0.25)'),
            sj.border('1px solid rgba(255,255,255,0.12)'),
            sj.hover([sj.bg(sj.palette.primary.dark)])
          ]"
        >
          <h1 [sj]="sj.m(0)">SJSS · sjRootApi</h1>
          <p [sj]="[sj.opacity(0.9), sj.m(0)]">
            Tokens, responsive objects, and pseudo‑selectors — inline.
          </p>
          <div [sj]="[sj.d('flex'), sj.gap(0.75)]">
            <a
              href="https://sjss.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              [sj]="[
                sj.c(sj.palette.primary.contrast),
                sj.opacity(0.95),
                sj.textDecoration('none'),
                sj.hover([sj.textDecoration('underline'), sj.opacity(1)])
              ]"
              >Docs</a
            >
            <a
              href="https://www.npmjs.com/package/super-jss"
              target="_blank"
              rel="noopener noreferrer"
              [sj]="[
                sj.c(sj.palette.primary.contrast),
                sj.opacity(0.95),
                sj.textDecoration('none'),
                sj.hover([sj.textDecoration('underline'), sj.opacity(1)])
              ]"
              >npm</a
            >
          </div>
        </div>

        <!-- Story: 2) Palette at a glance -->
        <div
          [sj]="[
            sj.d('grid'),

            sj.gap(sj.gap.options.default),
            sj.gridTemplateColumns({
              xs: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)'
            })
          ]"
        >
          <div
            [sj]="[
              sj.d('flex'),
              sj.fxAItems(sj.alignItems.options.center),
              sj.fxJustify(sj.justifyContent.options.center),
              sj.p(0.5),
              sj.brad(0.5),
              sj.bg(sj.palette.primary.main),
              sj.c(sj.palette.primary.contrast),
              sj.boxShadow('0 2px 8px rgba(0,0,0,0.12)')
            ]"
          >
            Primary
          </div>
          <div
            [sj]="[
              sj.d('flex'),
              sj.fxAItems(sj.alignItems.options.center),
              sj.fxJustify(sj.justifyContent.options.center),
              sj.p(0.5),
              sj.brad(0.5),
              sj.bg(sj.palette.secondary.main),
              sj.c(sj.palette.secondary.contrast),
              sj.boxShadow('0 2px 8px rgba(0,0,0,0.12)')
            ]"
          >
            Secondary
          </div>
          <div
            [sj]="[
              sj.d('flex'),
              sj.fxAItems(sj.alignItems.options.center),
              sj.fxJustify(sj.justifyContent.options.center),
              sj.p(0.5),
              sj.brad(0.5),
              sj.bg(sj.palette.light.main),
              sj.c(sj.palette.dark.main),
              sj.boxShadow('0 2px 8px rgba(0,0,0,0.12)')
            ]"
          >
            Light
          </div>
          <div
            [sj]="[
              sj.d('flex'),
              sj.fxAItems(sj.alignItems.options.center),
              sj.fxJustify(sj.justifyContent.options.center),
              sj.p(0.5),
              sj.brad(0.5),
              sj.bg(sj.palette.dark.main),
              sj.c(sj.palette.light.main),
              sj.boxShadow('0 2px 8px rgba(0,0,0,0.12)')
            ]"
          >
            Dark
          </div>
        </div>

        <!-- Story: 3) Layout & responsiveness -->
        <p [sj]="[sj.mt(1), sj.opacity(0.9)]">
          Layout scales from one to two columns using responsive objects.
        </p>
        <div
          [sj]="[
            sj.d('grid'),
            sj.gap({ xs: 0.5, md: 1 }),
            sj.gridTemplateColumns({ xs: '1fr', md: 'repeat(2, 1fr)' })
          ]"
        >
          <!-- Story: 4) Interaction (hover/transition/shadow) -->
          <div
            [sj]="[
              sj.p(0.75),
              sj.brad(0.5),
              sj.bg(sj.palette.light.main),
              sj.c(sj.palette.dark.main),
              sj.boxShadow('0 2px 10px rgba(0,0,0,0.08)'),
              sj.transition('transform 120ms ease, box-shadow 120ms ease'),
              sj.hover([
                sj.transform('translateY(-2px)'),
                sj.boxShadow('0 10px 24px rgba(0,0,0,0.18)')
              ])
            ]"
          >
            <h3 [sj]="sj.m(0)">Interactive card</h3>
            <p [sj]="sj.m(0)">Hover me for elevation ✨</p>
          </div>

          <!-- Story: 5) Theme surfaces -->
          <div
            [sj]="[
              sj.p(0.75),
              sj.brad(0.5),
              sj.bg(sj.palette.secondary.main),
              sj.c(sj.palette.secondary.contrast),
              sj.hover([sj.bg(sj.palette.secondary.dark)])
            ]"
          >
            <h3 [sj]="sj.m(0)">Secondary surface</h3>
            <p [sj]="sj.m(0)">Theme tokens for bg/contrast</p>
          </div>

          <!-- Story: 6) Outline surface -->
          <div
            [sj]="[
              sj.p(0.75),
              sj.brad(0.5),
              sj.bg('transparent'),
              sj.c(sj.palette.dark.main),
              sj.borderWidth(sj.borderWidth.options.default),
              sj.borderStyle(sj.borderStyle.options.solid),
              sj.borderColor(sj.palette.dark.main)
            ]"
          >
            <h3 [sj]="sj.m(0)">Outlined surface</h3>
            <p [sj]="sj.m(0)">Built from TS tokens</p>
          </div>
        </div>

        <!-- Story: 7) Buttons with pseudo‑selectors -->
        <button
          [sj]="[
            sj.bg(sj.palette.primary.main),
            sj.c(sj.palette.primary.contrast),
            sj.brad(0.5),
            sj.p({ xs: 0.5, md: 0.75 }),
            sj.fontWeight(600),
            sj.cursor('pointer'),
            sj.border('none'),
            sj.transition('background-color 120ms ease, transform 60ms ease'),
            sj.hover([sj.bg(sj.palette.primary.dark)]),
            sj.active([sj.transform('scale(0.98)')])
          ]"
        >
          Themed Button
        </button>

        <!-- Story: 8) Shareable styles from TS -->
        <div [sj]="primaryOutlineStyles()">
          Primary outline from TS (typed SjStyle[])
        </div>
      </div>
    </div>
  `,
})
export class App {
  name = "Angular";
  readonly sj: SjRootApi = sj;
  // Single typed SjStyle[] example (built via sjRootApi functions only)
  primaryOutlineStyles(): SjStyle[] {
    return [
      this.sj.borderWidth(this.sj.borderWidth.options.default),
      this.sj.borderStyle(this.sj.borderStyle.options.solid),
      this.sj.borderColor(this.sj.palette.primary.main),
      this.sj.brad(0.5),
      this.sj.p(0.5),
      this.sj.bg(this.sj.palette.light.light),
      this.sj.c(this.sj.palette.dark.main),
    ];
  }
}

bootstrapApplication(App);
