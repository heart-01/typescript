// Widget Settings Interface
interface WidgetSettings {
  [key: string]: any;
}

class Widget {
  type: string;
  settings: WidgetSettings;

  constructor(type: string, settings: WidgetSettings) {
    this.type = type;
    this.settings = settings;
  }

  clone(): Widget {
    // Deep clone the settings object to ensure each widget has its own settings instance
    const clonedSettings = JSON.parse(JSON.stringify(this.settings));
    return new Widget(this.type, clonedSettings);
  }

  customize(customSettings: WidgetSettings): void {
    // Apply custom settings to the widget
    Object.assign(this.settings, customSettings);
  }

  display(): void {
    console.log(`Displaying ${this.type} widget with settings:`, this.settings);
  }
}

// Prototypes
const chartWidgetPrototype = new Widget("Chart", {
  color: "blue",
  size: "medium",
});
const tableWidgetPrototype = new Widget("Table", { rows: 5, columns: 3 });

// Usage
// User wants a chart widget with custom color
const userChartWidget = chartWidgetPrototype.clone();
userChartWidget.customize({ color: "green" });
userChartWidget.display(); // Displaying Chart widget with settings: { color: 'green', size: 'medium' }

// User adds a standard table widget
const userTableWidget = tableWidgetPrototype.clone();
userTableWidget.display(); // Displaying Table widget with settings: { rows: 5, columns: 3 }
