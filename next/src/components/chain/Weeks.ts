// A week's route of the tool, which shows that week's deliverable: its base path and the sections its tabs link to
export interface ToolSection {
  label: string;
  // The section's path under the base; '' is the week's home
  path: string;
}

export interface ToolWeek {
  base: string;
  sections: ToolSection[];
}

export const Week8: ToolWeek = {
  base: '/w8',
  sections: [{label: 'Chains', path: ''}],
};

// The week the root redirects to
export const LatestWeek = Week8;
