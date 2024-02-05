// Report Interface
interface IReport {
  dateRange: { from: string; to: string };
  filters: string[];
  format: string;
}

// Complex Object
class Report implements IReport {
  dateRange: { from: string; to: string };
  filters: string[];
  format: string;

  constructor(builder: ReportBuilder) {
    this.dateRange = builder.dateRange;
    this.filters = builder.filters;
    this.format = builder.format;
    // other report parameters...
  }

  generate(): void {
    // Logic to generate the report
    console.log(`Generating report with: ${JSON.stringify(this)}`);
  }
}

// Builder
class ReportBuilder {
  dateRange: { from: string; to: string };
  filters: string[];
  format: string;

  setDateRange(dateRange: { from: string; to: string }): ReportBuilder {
    this.dateRange = dateRange;
    return this;
  }

  setFilters(filters: string[]): ReportBuilder {
    this.filters = filters;
    return this;
  }

  setFormat(format: string): ReportBuilder {
    this.format = format;
    return this;
  }

  build(): Report {
    return new Report(this);
  }
}

// Usage
const reportBuilder = new ReportBuilder();
const report = reportBuilder.setDateRange({ from: "2021-01-01", to: "2021-12-31" }).setFilters(["region:Europe", "product:Books"]).setFormat("PDF").build();

report.generate(); // Generating report with specified parameters
