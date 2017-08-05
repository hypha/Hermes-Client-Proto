class FadData{
  constructor() {
    this.data = {
          "nodes": [
            {
              "id": "n0",
              "x": 0,
              "y": 0,
              "label": "Hair Dryer2",
              "size": 16,
              "color": "blue"
            },
            {
              "id": "n1",
              "label": "Air Heating System",
              "size": 16,
              "color": "blue"
            },
            {
              "id": "n2",
              "label": "Power and Control System",
              "size": 16,
              "color": "blue"
            },
            {
              "id": "n3",
              "label": "Blower System",
              "size": 16,
              "color": "blue"
            },
            {
              "id": "n4",
              "label": "(Wet) Hair",
              "size": 8
            },
            {
              "id": "n5",
              "label": "Mains",
              "size": 8
            },
            {
              "id": "n6",
              "label": "Air (Ambient)",
              "size": 8
            },
            {
              "id": "n7",
              "label": "Operator",
              "size": 8
            }


          ],
          "edges": [
            {
              "id": "e0",
              "source": "n1",
              "target": "n0",
              "label": "heats air"
            },
            {
              "id": "e1",
              "source": "n2",
              "target": "n1"
            },

            {
              "id": "e2",
              "source": "n2",
              "target": "n3",
              "label": "controls"
            },

            {
              "id": "e3",
              "source": "n3",
              "target": "n0",
              "label": "blows air"
            },
            {
              "id": "e4",
              "source": "n0",
              "target": "n4",
              "label": "Dries"
            },
            {
              "id": "e5",
              "source": "n5",
              "target": "n0",
              "label": "powers system"
            },
            {
              "id": "e6",
              "source": "n6",
              "target": "n0",
              "label": "provides heating medium"
            },
            {
              "id": "e7",
              "source": "n7",
              "target": "n0",
              "label": "controls system"
            }
          ]
        }
    ;
  }

   getGraph() {
    return this.data;
  }
}
export default FadData;
