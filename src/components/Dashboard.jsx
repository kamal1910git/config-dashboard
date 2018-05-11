import React, { Component } from 'react';
import Dashboard, { addWidget } from 'react-dazzle';

// App components
import Header from './Header';
import LeftNav from './MenuWrap';
import EditBar from './EditBar';
import SaveBar from './SaveBar';
import Container from './Container';
import AddWidgetDialog from './AddWidgetDialog';
import CustomFrame from './CustomFrame';

// Widgets of the dashboard.
import BarChart from './widgets/BarChart';
import BarChart1 from './widgets/BarChart1';
import LineChart from './widgets/LineChart';
import DoughnutChart from './widgets/DoughnutChart';
import DoughnutChart1 from './widgets/DoughnutChart1';
import DataGrid from './widgets/DataGrid';

// We are using bootstrap as the UI library
import 'bootstrap/dist/css/bootstrap.css';

// Default styes of dazzle.
import 'react-dazzle/lib/style/style.css';

// Our styles
import '../styles/custom.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Widgets that are available in the dashboard
      widgets: {
        EngineTelemetricsWidget: {
          type: BarChart,
          title: 'Password Weaknesses',
        },
        PerformanceWidget: {
          type: DoughnutChart,
          title: 'Group Membership',
        },
        ShipVitalTelemetricsWidget: {
          type: LineChart,
          title: 'Sensitive Files Flow',
        },
        GridWidget: {
          type: DataGrid,
          title: 'User Details',
        },
        BarChartWidget: {
          type: BarChart1,
          title: 'Summary of Types of Data Open to All Users',
        },
        PieChartWidget: {
          type: DoughnutChart1,
          title: 'Unused Access to Sensitive Data',
        },
      },
      // Layout of the dashboard
      layout: {
        rows: [{
          columns: [{
            className: 'col-md-12 col-sm-12 col-xs-12',
            widgets: [{key: 'ShipVitalTelemetricsWidget'}],
          }],
        },         
        {
          columns: [{
            className: 'col-md-8 col-sm-8 col-xs-8',
            widgets: [{key: 'EngineTelemetricsWidget'}],
          }, {
            className: 'col-md-4 col-sm-4 col-xs-4',
            widgets: [{key: 'PerformanceWidget'}],
          }],
        },
        {
          columns: [{
            className: 'col-md-12 col-sm-12 col-xs-12',
            widgets: [{key: 'BarChartWidget'}],
          }],
        },
        {
          columns: [{
            className: 'col-md-8 col-sm-8 col-xs-8',
            widgets: [{key: 'GridWidget'}],
          },
          {
            className: 'col-md-4 col-sm-4 col-xs-4',
            widgets: [{key: 'PieChartWidget'},{key: 'ShipVitalTelemetricsWidget'}],
          }],
        }],
        
      },
      editMode: false,
      isModalOpen: false,
      addWidgetOptions: null,
    };
  }

  /**
   * When a widget is removed, the layout should be set again.
   */
  onRemove = (layout) => {
    this.setState({
      layout: layout,
    });
  }

  /**
   * Adds new widgget.
   */
  onAdd = (layout, rowIndex, columnIndex) => {
    // Open the AddWidget dialog by seting the 'isModalOpen' to true.
    // Also preserve the details such as the layout, rowIndex, and columnIndex  in 'addWidgetOptions'.
    //  This will be used later when user picks a widget to add.
    this.setState({
      isModalOpen: true,
      addWidgetOptions: {
        layout,
        rowIndex,
        columnIndex,
      },
    });
  }

  /**
   * When a widget moved, this will be called. Layout should be given back.
   */
  onMove = (layout) => {
    this.setState({
      layout: layout,
    });
  }

  /**
   * This will be called when user tries to close the modal dialog.
   */
  onRequestClose = () => {
    this.setState({
      isModalOpen: false,
    });
  }

  render() {
    return (
    <Container>
      <AddWidgetDialog widgets={this.state.widgets} isModalOpen={this.state.isModalOpen} onRequestClose={this.onRequestClose} onWidgetSelect={this.handleWidgetSelection}/>     
      <Header />
      <LeftNav menus={menus} />
      <EditBar onEdit={this.toggleEdit} />
      <Dashboard
        frameComponent={CustomFrame}
        onRemove={this.onRemove}
        layout={this.state.layout}
        widgets={this.state.widgets}
        editable={this.state.editMode}
        onAdd={this.onAdd}
        onMove={this.onMove}
        addWidgetComponentText="Add New Widget"
        />
        <SaveBar onEdit={this.toggleSave} />
    </Container>
    );
  }

  /**
   * Toggeles edit mode in dashboard.
   */
  toggleEdit = () => {
    this.setState({
      editMode: !this.state.editMode,
    });
  };

  toggleSave = () => {
    alert("Dashboard configuration has been saved..")
  };

  /**
   * When user selects a widget from the modal dialog, this will be called.
   * By calling the 'addWidget' method, the widget could be added to the previous requested location.
   */
  handleWidgetSelection = (widgetName) => {
    const {layout, rowIndex, columnIndex} = this.state.addWidgetOptions;

    /**
     * 'AddWidget' method gives you the new layout.
     */
    this.setState({
      layout: addWidget(layout, rowIndex, columnIndex, widgetName),
    });

    // Close the dialogbox
    this.onRequestClose();
  }
}

export default App;

const menus = {
  slide: {buttonText: 'Slide', items: 1},
  stack: {buttonText: 'Stack', items: 1},
  elastic: {buttonText: 'Elastic', items: 1},
  bubble: {buttonText: 'Bubble', items: 1},
  push: {buttonText: 'Push', items: 1},
  pushRotate: {buttonText: 'Push Rotate', items: 2},
  scaleDown: {buttonText: 'Scale Down', items: 2},
  scaleRotate: {buttonText: 'Scale Rotate', items: 2},
  fallDown: {buttonText: 'Fall Down', items: 2},
  reveal: {buttonText: 'Reveal', items: 1}
};